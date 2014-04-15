#!/bin/bash

# Get file name from the -f param
while getopts ":f:" opt; do
	case "$opt" in
		f) file=$OPTARG ;;
	esac
done
shift $(( OPTIND - 1 ))

# Usage information if no params were given
if [[ "${file}" == "" || "${@}" == "" ]]
then
	echo "Usage: config-finder.sh -f filename paths..."
	exit
fi

# Check all paths specified on command line
for d in "$@";
do
	# Give it a name
	dir=$d

	# Make sure the directory exists
	if [[ ! -e "${dir}" ]]
	then
		continue
	fi

	# Check if argument is a file or directory
	if [[ -d "${dir}" ]]
	then
		cd "${dir}"
	else
		cd "`dirname \"${dir}\"`"
	fi
	path=$(pwd)

	# Look for the specified file recursively in ancestor paths
	while [[ "${path}" != "" && ! -e "${path}/${file}" ]]; do
		path=${path%/*}
	done

	# If file was found echo to stdout
	if [ "${path}" != "" ]
	then
		echo "${path}/${file}"
		break
	fi

done