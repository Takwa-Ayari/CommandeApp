<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommandeController extends Controller
{
    public function index()
    {
        $commandes = Commande::all();
        return response()->json($commandes, 200);
    }

    public function show($id)
    {
        $commande = Commande::find($id);

        if (!$commande) {
            return response()->json(['message' => 'Commande not found'], 404);
        }

        return response()->json($commande, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
        ]);

        $commande = Commande::create($request->all());

        return response()->json($commande, 201);
    }

    public function update(Request $request, $id)
    {
        $commande = Commande::find($id);

        if (!$commande) {
            return response()->json(['message' => 'Commande not found'], 404);
        }

        $request->validate([
            'date' => 'required|date',
        ]);

        $commande->update($request->all());

        return response()->json($commande, 200);
    }

    public function destroy($id)
    {
        $commande = Commande::find($id);

        if (!$commande) {
            return response()->json(['message' => 'Commande not found'], 404);
        }

        $commande->delete();

        return response()->json(['message' => 'Commande deleted successfully'], 200);
    }
}
