import pg = require("pg");
import { QueryResult } from "pg";

export const getCategoryId = async (
  category: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select categoryid from category where category=$1";
  return await client.query(query, [category]);
};

export const getSubCategoryId = async (
  subCategory: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select subcategoryid from subcategory where subcategory=$1";
  return await client.query(query, [subCategory]);
};

export const getLineId = async (
  line: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select lineid from line where line=$1";
  return await client.query(query, [line]);
};

export const getColorId = async (
  color: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select colorid from color where color=$1";
  return await client.query(query, [color]);
};

export const getStatusId = async (
  status: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select statusid from status where status=$1";
  return await client.query(query, [status]);
};

export const getRefnum = async (
  refnum: string,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select name from lost where refnr=$1";
  return await client.query(query, [refnum]);
};

export const getLostId = async (
  lostid: number,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select lostid from lost where lostid=$1";
  return await client.query(query, [lostid]);
};

export const getFoundId = async (
  foundid: number,
  { client }: { client: pg.Client }
): Promise<QueryResult> => {
  const query = "select foundid from found where foundid=$1";
  return await client.query(query, [foundid]);
};
