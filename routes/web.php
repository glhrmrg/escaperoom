<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\RoomController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Rooms
Route::get('/hallway', [RoomController::class, 'hallwayRoom'])->name('hallway');
Route::get('/chest-room', [RoomController::class, 'chestRoom'])->name('chest-room');
Route::get('/head-room', [RoomController::class, 'headRoom'])->name('head-room');
Route::get('/abdomen-room', [RoomController::class, 'abdomenRoom'])->name('abdomen-room');
Route::get('/skeletal-muscle-room', [RoomController::class, 'skeletalMuscleRoom'])->name('skeletal-muscle-room');

// Questions
Route::get('/chest-room/question', [QuestionController::class, 'getChestRoomQuestion'])->name('chest-room.question');
Route::get('/head-room/question', [QuestionController::class, 'getHeadRoomQuestion'])->name('head-room.question');
Route::get('/abdomen-room/question', [QuestionController::class, 'getAbdomenRoomQuestion'])->name('abdomen-room.question');
Route::get('/skeletal-muscle-room/question', [QuestionController::class, 'getSkeletalMuscleRoomQuestion'])->name('skeletal-muscle-room.question');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
