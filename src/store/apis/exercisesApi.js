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
      providesTags: ["exercises"],
    }),

    createExercise: builder.mutation({
      query: (exercise) => {
        return {
          url: "/exercises",
          method: "POST",
          body: {
            name: exercise,
          },
        };
      },
      invalidatesTags: ["exercises"],
    }),

    deleteExercise: builder.mutation({
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
  useDeleteExerciseMutation,
} = exercisesApi;
