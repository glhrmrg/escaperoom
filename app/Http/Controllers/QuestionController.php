<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function getChestRoomQuestion()
    {
        $room = Room::where('name', 'ChestRoom')->first();
        $question = Question::where('room_id', $room->id)->inRandomOrder()->first();
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

    public function getHeadRoomQuestion()
    {
        $room = Room::where('name', 'HeadRoom')->first();
        $question = Question::where('room_id', $room->id)->inRandomOrder()->first();
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
    public function getAbdomenRoomQuestion()
    {
        $room = Room::where('name', 'AbdomenRoom')->first();
        $question = Question::where('room_id', $room->id)->inRandomOrder()->first();
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

    public function getSkeletalMuscleRoomQuestion()
    {
        $room = Room::where('name', 'SkeletalMuscleRoom')->first();
        $question = Question::where('room_id', $room->id)->inRandomOrder()->first();
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
