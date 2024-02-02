import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exercisesApi = createApi({
  reducerPath: "exercises",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => {
        return {
          url: "/exercises",
          method: "GET",
        };
      },
    }),

    createExercises: builder.mutation({
      query: (exercise) => {
        return {
          url: "/exercises",
          method: "POST",
          body: {
            name: exercise,
          },
        };
      },
    }),
  }),
});

export const { useGetExercisesQuery, useCreateExercisesMutation } =
  exercisesApi;
