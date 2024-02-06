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
      providesTags: ["workouts"],
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
      invalidatesTags: ["workouts"],
    }),

    deleteWorkout: builder.mutation({
      query: (id) => {
        return {
          url: `/workouts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["workouts"],
    }),
  }),
});

export const { useGetWorkoutsQuery, useCreateWorkoutMutation } = workoutsApi;
