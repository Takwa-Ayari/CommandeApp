<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategorieController extends Controller
{
    public function index()
    {
        $categories = Categorie::all();
        return response()->json($categories, 200);
    }

    public function show($id)
    {
        $categorie = Categorie::find($id);

        if (!$categorie) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($categorie, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
        ]);

        $categorie = Categorie::create($request->all());

        return response()->json($categorie, 201);
    }

    public function update(Request $request, $id)
    {
        $categorie = Categorie::find($id);

        if (!$categorie) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $request->validate([
            'nom' => 'required',
        ]);

        $categorie->update($request->all());

        return response()->json($categorie, 200);
    }

    public function destroy($id)
    {
        $categorie = Categorie::find($id);

        if (!$categorie) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $categorie->delete();

        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
