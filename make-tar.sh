#!/bin/sh
rm -f web-engineering-projekt-valerio-cocco.tar.gz
cd ..
tar --exclude=".*" -cvzf web-engineering-projekt-valerio-cocco.tar.gz web-engineering-projekt
mv web-engineering-projekt-valerio-cocco.tar.gz web-engineering-projekt/