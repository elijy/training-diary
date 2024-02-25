import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Exercise } from "../../types/Exercise";
import { baseUrl } from "./config";

export const exercisesApi = createApi({
  reducerPath: "exercises",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Exercise"],
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
      providesTags: (results = []) => {
        return [
          "Exercise",
          ...results.map((item) => {
            return { type: "Exercise" as const, id: item.id };
          }),
        ];
      },
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
      invalidatesTags: (result, error, arg) => [
        { type: "Exercise", id: arg.id },
      ],
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
      invalidatesTags: ["Exercise"],
    }),

    deleteExercise: builder.mutation<Exercise, string>({
      query: (id) => {
        return {
          url: `/exercises/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Exercise"],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useCreateExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
} = exercisesApi;
