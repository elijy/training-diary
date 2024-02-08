import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Exercise } from "../../models/Exercise";

export const exercisesApi = createApi({
  reducerPath: "exercises",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["exercises"],
  endpoints: (builder) => ({
    getExercises: builder.query<Exercise[], string>({
      query: (workoutId) => {
        return {
          url: "/exercises",
          method: "GET",
          params: {
            workoutId,
          },
        };
      },
      providesTags: ["exercises"],
    }),

    createExercise: builder.mutation<Exercise, Exercise>({
      query: (exercise) => {
        return {
          url: "/exercises",
          method: "POST",
          body: {
            name: exercise.name,
            workoutId: exercise.workoutId,
          },
        };
      },
      invalidatesTags: ["exercises"],
    }),

    updateExercise: builder.mutation<Exercise, Exercise>({
      query: (exercise) => {
        return {
          url: `/exercises/${exercise.id}`,
          method: "PUT",
          body: {
            name: exercise.name,
            workoutId: exercise.workoutId,
          },
        };
      },
      invalidatesTags: ["exercises"],
    }),

    deleteExercise: builder.mutation<Exercise, string>({
      query: (id) => {
        return {
          url: `/exercises/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["exercises"],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useCreateExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
} = exercisesApi;
