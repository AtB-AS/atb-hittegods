import pg = require("pg");
import { QueryResult } from "pg";

export const getCategoryId = async (
  category: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const refnumQuery = "select categoryid from category where category=$1";
  return await client.query(refnumQuery, [category]);
};

export const getSubCategoryId = async (
  subCategory: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const refnumQuery =
    "select subcategoryid from subcategory where subcategory=$1";
  return await client.query(refnumQuery, [subCategory]);
};

export const getLineId = async (
  line: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const refnumQuery = "select lineid from line where line=$1";
  return await client.query(refnumQuery, [line]);
};

export const getColorId = async (
  color: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const refnumQuery = "select colorid from color where color=$1";
  return await client.query(refnumQuery, [color]);
};

export const getStatusId = async (
  status: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const refnumQuery = "select statusid from status where status=$1";
  return await client.query(refnumQuery, [status]);
};
