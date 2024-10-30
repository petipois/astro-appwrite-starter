/// <reference path="../.astro/types.d.ts" />
type Models = import("node-appwrite").Models;

declare namespace App {
  interface Locals {
    user?: Models.User<Models.Preferences>;
  }
}