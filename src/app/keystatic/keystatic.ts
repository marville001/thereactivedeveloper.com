// src/app/keystatic/keystatic.ts
"use client";

import { makePage } from "@keystatic/next/ui/app";
import config from "../../../keystatic.config";

console.log({ config });

export default makePage(config);