// deps.ts - Centralisation des dépendances

// Oak (Framework HTTP)
export { Application, Router, Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";


// UUID pour générer des identifiants uniques
import { v4 } from "https://deno.land/std@0.203.0/uuid/mod.ts";
export { v4 as uuid };

// Logger pour affichage des logs dans la console
export * as log from "https://deno.land/std@0.203.0/log/mod.ts";
