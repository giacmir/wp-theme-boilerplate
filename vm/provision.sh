#! /bin/bash

export DEBIAN_FRONTEND=noninteractive

#upgrade packets
apt-get update && apt-get -q -y upgrade

#install base packages
apt-get install -y git-core vim unzip
