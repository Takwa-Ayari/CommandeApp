<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProduitCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produit_commandes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produit_id');
            $table->unsignedBigInteger('commande_id');
            $table->integer('quantite')->default(1);

            // Foreign key relationships
            $table->foreign('produit_id')->references('id')->on('produits');
            $table->foreign('commande_id')->references('id')->on('commandes');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produit_commandes');
    }
}
