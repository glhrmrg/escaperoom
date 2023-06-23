<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function getChestRoomQuestion($difficulty): \Illuminate\Http\JsonResponse
    {
        $room = Room::where('name', 'ChestRoom')->first();
        return $this->getQuestion($room, $difficulty);
    }

    public function getHeadRoomQuestion($difficulty): \Illuminate\Http\JsonResponse
    {
        $room = Room::where('name', 'HeadRoom')->first();
        return $this->getQuestion($room, $difficulty);
    }
    public function getAbdomenRoomQuestion($difficulty): \Illuminate\Http\JsonResponse
    {
        $room = Room::where('name', 'AbdomenRoom')->first();
        return $this->getQuestion($room, $difficulty);
    }

    public function getSkeletalMuscleRoomQuestion($difficulty): \Illuminate\Http\JsonResponse
    {
        $room = Room::where('name', 'SkeletalMuscleRoom')->first();
        return $this->getQuestion($room, $difficulty);
    }

    /**
     * @param $room
     * @param $difficulty
     * @return \Illuminate\Http\JsonResponse
     */
    public function getQuestion($room, $difficulty): \Illuminate\Http\JsonResponse
    {
        $question = Question::where('room_id', $room->id)
            ->where('difficulty', $difficulty)
            ->inRandomOrder()
            ->first();
        $options = $question->options()->get();

        return response()->json([
            'question' => [
                'id' => $question->id,
                'question' => $question->question,
                'difficulty' => $question->difficulty,
                'category' => $question->category,
            ],
            'options' => $options->map(function ($option) {
                return [
                    'id' => $option->id,
                    'option' => $option->option,
                    'is_correct' => $option->is_correct,
                ];
            }),
        ]);
    }

}
