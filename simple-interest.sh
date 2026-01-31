#!/bin/bash
# Ce script calcule l'intérêt simple.
# Formule : Intérêt Simple = (Principal * Taux * Période) / 100

echo "Entrez le montant principal :"
read p
echo "Entrez le taux d'intérêt annuel (en %) :"
read r
echo "Entrez la période (en années) :"
read t

s=$(echo "scale=2; $p * $r * $t / 100" | bc -l)

echo "L'intérêt simple est : $s"
