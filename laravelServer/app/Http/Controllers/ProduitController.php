<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProduitController extends Controller
{
    public function index()
    {
        $produits = Produit::all();
        return response()->json($produits, 200);
    }

    public function show($id)
    {
        $produit = Produit::find($id);

        if (!$produit) {
            return response()->json(['message' => 'Produit not found'], 404);
        }

        return response()->json($produit, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prix' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        $produit = Produit::create($request->all());

        return response()->json($produit, 201);
    }

    public function update(Request $request, $id)
    {
        $produit = Produit::find($id);

        if (!$produit) {
            return response()->json(['message' => 'Produit not found'], 404);
        }

        $request->validate([
            'nom' => 'required',
            'prix' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        $produit->update($request->all());

        return response()->json($produit, 200);
    }

    public function destroy($id)
    {
        $produit = Produit::find($id);

        if (!$produit) {
            return response()->json(['message' => 'Produit not found'], 404);
        }

        $produit->delete();

        return response()->json(['message' => 'Produit deleted successfully'], 200);
    }
}
