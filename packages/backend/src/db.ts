import pg = require("pg");
import { QueryResult } from "pg";

export const getCategoryId = async (
  category: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  //TODO implement
  const refnumQuery = "select * from mistet where refnr=$1";
  return await client.query(refnumQuery, [category]);
};

export const getSubCategoryId = async (
  subCategory: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  //TODO implement
  const refnumQuery = "select * from mistet where refnr=$1";
  return await client.query(refnumQuery, [subCategory]);
};

export const getLineId = async (
  line: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  //TODO implement
  const refnumQuery = "select * from mistet where refnr=$1";
  return await client.query(refnumQuery, [line]);
};

export const getColorId = async (
  color: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  //TODO implement
  const refnumQuery = "select * from mistet where refnr=$1";
  return await client.query(refnumQuery, [color]);
};
