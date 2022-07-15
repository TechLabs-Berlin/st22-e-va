import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Girl from "./HealthImages/Girl.jpg";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 1200,
        height: 1000,
        transform: "translateZ(0)",
        marginLeft: "80px",
        marginTop: "80px",
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="center"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: { Girl },
    title: (
      <a href="https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186">
        {" "}
        What is Menstrual cycle{" "}
      </a>
    ),
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: (
      <a href=" https://www.healthline.com/health/womens-health/period-signs">
        10 signs that your period is about to start
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: (
      <a href="https://www.apollocradle.com/what-is-difference-between-pcod-vs-pcos/">
        PCOD vs PCOS
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: (
      <a href="https://www.mayoclinic.org/diseases-conditions/premenstrual-syndrome/symptoms-causes/syc-20376780">
        Premenstrual Syndrome(PMS)
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: (
      <a href="https://www.webmd.com/women/pms/signs-your-period-is-coming">
        Is your period coming sooner?
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: (
      <a href="https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439">
        What is Polycystic ovary syndrome?
      </a>
    ),
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: (
      <a href="https://www.parents.com/getting-pregnant/trying-to-conceive/tips/best-sex-for-getting-pregnant/">
        When is the right time to conceive?
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: (
      <a href="https://www.verywellfamily.com/how-long-does-ovulation-last-1960235">
        How long does the ovulation last?
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: (
      <a href="https://www.webmd.com/baby/first-period-after-pregnancy-what-to-expect">
        First period after pregnancy: What to expect
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: (
      <a href="https://www.pregnancybirthbaby.org.au/labour-the-signs-and-stages">
        Giving birth:Stages of pregnancy
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: (
      <a href="https://flo.health/menstrual-cycle/lifestyle/fitness-and-exercise/exercising-during-period">
        Exercising during period
      </a>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: (
      <a href="https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy-and-exercise/art-20046896">
        Exercising during pregnancy
      </a>
    ),
  },
];
