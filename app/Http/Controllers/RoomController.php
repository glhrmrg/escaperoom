<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function hallwayRoom()
    {
        return Inertia::render('Rooms/HallwayRoom');
    }

    public function chestRoom(Request $request)
    {
        $chestRoom = Room::where('name', 'ChestRoom')->first();

        return Inertia::render('Rooms/ChestRoom', [
            'room' => $chestRoom
        ]);
    }

    public function headRoom()
    {
        $headRoom = Room::where('name', 'HeadRoom')->first();

        return Inertia::render('Rooms/HeadRoom',[
            'room' => $headRoom
        ]);
    }

    public function abdomenRoom()
    {
        $abdomenRoom = Room::where('name', 'AbdomenRoom')->first();

        return Inertia::render('Rooms/AbdomenRoom',[
            'room' => $abdomenRoom
        ]);
    }

    public function skeletalMuscleRoom()
    {
        $skeletalMuscleRoom = Room::where('name', 'SkeletalMuscleRoom')->first();

        return Inertia::render('Rooms/SkeletalMuscleRoom',[
            'room' => $skeletalMuscleRoom
        ]);
    }

    public function scoreAdd(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();
        $user->score += 2;
        $user->save();

        return response()->json([
            'score' => $user->score
        ]);
    }

    public function scoreSubtract(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();
        $user->score -= 2;
        $user->save();

        return response()->json([
            'score' => $user->score
        ]);
    }
    public function score(): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();
        return response()->json([
            'score' => $user->score
        ]);
    }

    public function scoreReset(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();
        $user->score = 5;
        $user->save();

        return response()->json([
            'score' => $user->score
        ]);
    }

}
