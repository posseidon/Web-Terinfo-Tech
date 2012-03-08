--
-- Get Database Size in bytes
--
SELECT relname,
       pg_total_relation_size(CAST(relname AS TEXT)) AS SIZE
FROM pg_class AS pgc,
     pg_namespace AS pgn
WHERE pg_table_is_visible(pgc.oid) IS TRUE
  AND relkind = 'r'
  AND pgc.relnamespace = pgn.oid
  AND pgn.nspname NOT IN ('information_schema','pg_catalog');

