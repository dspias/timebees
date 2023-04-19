#-----------------------------------------------------------
# Build
#-----------------------------------------------------------

# Build for chrome extension
bld:
	yarn run build

# Run in web browser
start:
	yarn run start

# install dependencies
install:
	yarn

# Remove node_modules
rm-node:
	rm -rf node_modules

# Re-install project
reinstall: rm-node install