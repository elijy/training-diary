import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Workout } from "../../types/Workout";

export const workoutsApi = createApi({
  reducerPath: "workouts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["workouts"],
  endpoints: (builder) => ({
    getWorkouts: builder.query<Workout[], void>({
      query: () => {
        return {
          url: "/workouts",
          method: "GET",
        };
      },
      providesTags: ["workouts"],
    }),

    createWorkout: builder.mutation<Workout, Date>({
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

    deleteWorkout: builder.mutation<Workout, string>({
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

export const {
  useGetWorkoutsQuery,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutsApi;
