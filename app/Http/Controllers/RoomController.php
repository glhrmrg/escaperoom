<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function hallwayRoom()
    {
        return Inertia::render('Rooms/HallwayRoom');
    }

    public function chestRoom()
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

}
