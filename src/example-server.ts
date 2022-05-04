import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";

const app = opine();

app.get("/", function (req, res) {
  res.send("Hello Sourabh");
});

const port = 3036

app.listen(
  port,
  () => console.log(`server has started on http://localhost:${port} 🚀`),
);