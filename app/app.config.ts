export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      // neutral: "slate",
    },
    button: {
      slots: { base: ["rounded-full"] },
      variants: {
        size: {
          md: {
            base: "px-10 py-5",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "text-default bg-linear-to-r from-[#5e31db] to-[#2473eb] hover:from-[#b493f1] hover:to-[#29288b] duration-1000",
        },
      ],
    },
    pageHero: {
      slots: {
        title: "font-medium md:text-8xl",
      },
    },
    pageCard: {
      variants: {
        variant: {
          subtle: {
            root: "bg-muted/25 ring-primary",
          },
        },
      },
    },
  },
});
