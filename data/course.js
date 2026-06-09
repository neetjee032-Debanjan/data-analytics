export const course = {
  title: "Numerical Methods",

  modules: [
    {
      id: "m1",
      title: "Numbers, Precision & Errors",

      lessons: [
        {
          id: "l1",
          title: "Floating Point Representation",

          pages: [
            {
              title: "Introduction",
              content: `
Floating point numbers are used to represent real numbers in computers.

They are stored using:
- Sign bit
- Exponent
- Mantissa
              `
            },

            {
              title: "Why It Is Needed",
              content: `
Computers cannot store infinite real numbers.

So approximation is required → leads to precision limits.
              `
            },

            {
              title: "Example",
              content: `
Example:
10.75 in binary floating point is stored approximately,
not exactly.
              `
            },

            {
              title: "Key Insight",
              content: `
This leads to rounding errors in numerical computation.
              `
            }
          ]
        }
      ]
    }
  ]
};
