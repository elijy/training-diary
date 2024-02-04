import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutsApi = createApi({
  reducerPath: "workouts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => {
        return {
          url: "/workouts",
          method: "GET",
        };
      },
    }),

    createWorkout: builder.mutation({
      query: (date) => {
        return {
          url: "/workouts",
          method: "POST",
          body: {
            date,
          },
        };
      },
    }),

    // updateExercise: builder.mutation({
    //   query: (exercise) => {
    //     return {
    //       url: `/exercises/${exercise.id}`,
    //       method: "PUT",
    //       body: {
    //         name: exercise.name,
    //       },
    //     };
    //   },
    //   invalidatesTags: ["exercises"],
    // }),

    // deleteExercise: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `/exercises/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["exercises"],
    // }),
  }),
});

export const { useGetWorkoutsQuery, useCreateWorkoutMutation } = workoutsApi;
