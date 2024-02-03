import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const setsApi = createApi({
  reducerPath: "sets",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getSets: builder.query({
      query: (exerciseId) => {
        return {
          url: "/sets",
          method: "GET",
          params: {
            exerciseId: exerciseId,
          },
        };
      },
      providesTags: ["sets"],
    }),

    createSet: builder.mutation({
      query: ({ exerciseId, weight, reps }) => {
        return {
          url: "/sets",
          method: "POST",
          body: {
            exerciseId,
            weight,
            reps,
          },
        };
      },
      invalidatesTags: ["sets"],
    }),

    deleteSet: builder.mutation({
      query: (id) => {
        return {
          url: `/sets/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["sets"],
    }),
  }),
});

export const { useGetSetsQuery, useCreateSetMutation, useDeleteSetMutation } =
  setsApi;
