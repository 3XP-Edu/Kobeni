#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto src/proto/user.proto

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/packages/user src/proto/user.proto