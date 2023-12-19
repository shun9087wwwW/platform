import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProfileCard({
  name,
  desc,
  university,
  schoolYear,
  lang,
  image,
  email,
}) {
  return (
    <div className="cardMedia_box d-flex justify-content-center align-items-center">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 300 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {university}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            学年：{schoolYear}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {desc}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            学んだ言語：{lang}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            宛先：{email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
