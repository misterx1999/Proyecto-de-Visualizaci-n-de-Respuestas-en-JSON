<template>
    <div>
        <h1>Respuestas</h1>
        <div v-if="getRespuestas.length">
            <ul>
                <li v-for="respuesta in getRespuestas" :key="respuesta.id">
                    <h2>{{ respuesta.title }}</h2>
                    <p>{{ respuesta.description }}</p>
                    <strong>Nivel: {{ respuesta.level }}</strong>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No hay respuestas disponibles.</p>
        </div>
    </div>    
</template>

<script setup>
// Importa el store que configuraste
import { useRespuestasStore } from "~/stores/respuestas";

// Instancia el store
const respuestasStore = useRespuestasStore();
const { getRespuestas } = respuestasStore;

// Llama a `fetchRespuestas` para cargar los datos
await respuestasStore.fetchRespuestas();
</script>
