
-- Dump budapest table
-- with
---- inserts
pg_dump -h localhost -p 5432 -t budapest --inserts -U postgresql -f /tmp/budapest.dmp brfk
---- create database
pg_dump -h localhost -p 5432 -t budapest --inserts --create -U postgresql -f /tmp/budapest.dmp brfk
---- with compression
pg_dump -s brfk -U postgresql -Fc -Z 9 -Cc -b -E utf8 -v | gzip > /tmp/brfk.sql.gz

-- Restore
pg_restore -i -h localhost -p 5432 -U postgresql -d brfk -v -f /tmp/brfk.sql.gz

-------- Dump Query result ----------
-- Method #1
\o /tmp/query.sql

-- Method #2
copy (select * from budapest) to '/tmp/q1.csv' with CSV;
-- insert into budapest(obj_name) values(null);
copy (select gid, obj_name from budapest) to STDOUT with DELIMITER AS '|' NULL AS 'URES' CSV QUOTE AS '"';
copy (select gid, obj_name from budapest) to '/tmp/q2.csv' with DELIMITER AS '|' NULL AS 'URES' CSV QUOTE AS '"';

-- Method #3
psql -d brfk -U postgresql -c "select gid, obj_name, level from budapest"
-- Define Separator -F ","
psql -d brfk -U postgresql -F"," -c "select gid, obj_name, level from budapest"
-- Dont show column headers/Show tuples only -t
psql -d brfk -U postgresql -F"," -t  -c "select gid, obj_name, level from budapest"
-- Show tuples only and dont format -A
psql -d brfk -U postgresql -F"," -A -t  -c "select gid, obj_name, level from budapest"


-- Loading and Dumping Spatial data
-- Note: casting from geography to geometry => geography::geometry and vice versa geometry::geography
-- Scenario based on Hungary database conatining data in OSM projection.
-- Using Pre-selected boundary table.
---- boundary
------ 4. Felosztas
------ 5. Regio
------ 6. Megye
------ 7. Kisterseg
------ 8. Telepules
------ 9. Kerulet
-- 1. Create new table Hungary counties with new projection in WGS984 aka SRID=4326.
create table magyarorszag(
		gid serial primary key, 
		level integer not null, 
		level_desc varchar(100) not null, 
		name varchar(254) not null, 
		region geography(POLYGON,4326)
	);
-- 2. Load Data from boundary table into counties table with projection transform. 
---- Using st_transform.
---- Felosztas
insert into magyarorszag(level, level_desc, name, region) select level::integer, 'Felosztás', name, st_transform(geom, 4326) from boundary where level = '4';
---- Regio
insert into magyarorszag(level, level_desc, name, region) select level::integer, 'Régió', name, st_transform(geom, 4326) from boundary where level = '5';
---- Megyek
insert into magyarorszag(level, level_desc, name, region) select level::integer, 'Megye', name, st_transform(geom, 4326) from boundary where level = '6';
---- Kisterseg
insert into magyarorszag(level, level_desc, name, region) select level::integer, 'Kistérség', name, st_transform(geom, 4326) from boundary where level = '7';
---- Telepules
insert into magyarorszag(level, level_desc, name, region) select level::integer, 'Kistérség', name, st_transform(geom, 4326) from boundary where level = '8';
-- 3. Dump table content out with pgsql2shp
pgsql2shp -f magyarorszag.shp -u postgresql -b -g region hungary magyarorszag
-- 4. Load data into Brfk database using shp2pgsql
shp2pgsql -c -s 4326 -i -I -G magyarorszag.shp magyarorszag > magyarorszag.sql
psql -d brfk -U postgresql -f magyarorszag.sql
-- 5. Visualize with QGIS



---- Geography and Geometry
-- Check with google maps
--Budapest
	47.5011151657 19.0531965145
	POINT(19.0531965145, 47.5011151657)
--Prague
	50.0878114 14.4204598
	POINT(14.4204 50.0878)
--Paris
	49.0083 2.5559
	POINT(2.5559 49.0083)

-- Example #1
select st_distance(
	ST_GeographyFromText('POINT(19.0531 47.5011)'),
	ST_GeographyFromText('POINT(2.5559 49.0083)')
);
-- Example #2
select st_distance(
	ST_GeographyFromText('POINT(19.0531 47.5011)'),
	ST_GeographyFromText('POINT(14.4204 50.0878)')
);
-- Example #3
select st_distance(
	ST_GeometryFromText('POINT(19.0531 47.5011)'),
	ST_GeometryFromText('POINT(14.4204 50.0878)')
);

