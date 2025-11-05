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
          xl: {
            base: "px-8 py-4",
          },
        },
      },
      compoundVariants: [
        {
          color: "neutral",
          variant: "subtle",
          class:
            "text-default bg-transparent bg-linear-to-r from-elevated to-muted duration-500",
        },
      ],
    },
    pageHero: {
      slots: {
        title: "text-default font-medium md:text-8xl",
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
