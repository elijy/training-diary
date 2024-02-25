import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Set } from "../../types/Set";
import { baseUrl } from "./config";

export const setsApi = createApi({
  reducerPath: "sets",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["sets"],
  endpoints: (builder) => ({
    getSets: builder.query<Set[], string>({
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

    createSet: builder.mutation<Set, Set>({
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

    deleteSet: builder.mutation<Set, string>({
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
