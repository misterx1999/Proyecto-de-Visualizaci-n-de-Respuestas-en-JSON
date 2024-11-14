import { defineStore } from "pinia";

interface Respuesta {
  id: number;
  title: string;
  level: string;
  description: string;
}

export const useRespuestasStore = defineStore("respuestas", {
  state: () => ({
    respuestas: [] as Respuesta[], // Define `respuestas` como un array de tipo Respuesta
  }),
  getters: {
    getRespuestas: (state) => state.respuestas,
  },
  actions: {
    async fetchRespuestas() {
      try {
        const respuestas = await $fetch("/api/respuestas");
        this.respuestas = respuestas;
      } catch (error) {
        console.error("Error al obtener las respuestas:", error);
      }
    },
  },
});
