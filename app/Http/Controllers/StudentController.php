<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        return Inertia::render('Students/Index', [
            'students' => Student::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_id' => 'required|string|max:50|unique:students,student_id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:students,email',
            'grade_level' => 'required|string|max:50',
            'section' => 'required|string|max:100',
        ]);

        Student::create($validated);

        return redirect()->route('students.index')
            ->with('success', 'Student added successfully!');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->route('students.index')
            ->with('success', 'Student deleted successfully!');
    }
}
