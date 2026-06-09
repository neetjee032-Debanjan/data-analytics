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
              title: "1. Why Floating Point Exists (Deep Foundation)",

              content: `
In computational mathematics, real numbers are infinite in nature.  
Numbers such as π, e, and √2 contain infinite decimal expansions that cannot be fully stored in digital systems.  

Computers, however, operate using finite memory and binary representation.  
This creates a fundamental limitation in representing real-world numbers exactly.  

To solve this, floating point representation is introduced as a standardized system for approximating real numbers.  
It allows computers to store extremely large and extremely small values using a structured encoding system.  

The idea is similar to scientific notation used in physics and chemistry, where numbers are written in compact exponential form.  

For example, instead of storing 0.00000045 directly, computers store it as 4.5 × 10⁻⁷.  

This system ensures efficiency in storage while maintaining acceptable precision for computation.  

Floating point representation is the backbone of scientific computing, simulations, graphics engines, and machine learning systems.  

Without it, modern computing systems would not be able to perform large-scale numerical calculations effectively.  
              `
            },

            {
              title: "2. Internal Structure of Floating Point Numbers",

              content: `
A floating point number is composed of three essential components that define its structure and behavior.  

The first component is the sign bit, which determines whether the number is positive or negative.  

The second component is the mantissa (or significand), which stores the significant digits of the number.  

The third component is the exponent, which defines the scale or magnitude of the number.  

Mathematically, a floating point number is represented as:

Number = (-1)^sign × mantissa × base^exponent  

This structure allows a very wide range of values to be represented in a compact format.  

However, since the mantissa has limited storage bits, precision is always finite.  

This leads to rounding errors during arithmetic operations.  

Even simple decimal values such as 0.1 cannot be represented exactly in binary form.  

This introduces small approximation errors that accumulate during computation.  
              `
            },

            {
              title: "3. Practical Limitations and Error Accumulation",

              content: `
Floating point arithmetic introduces unavoidable rounding errors in computation.  

While each individual error may be extremely small, repeated operations cause error accumulation.  

This phenomenon is known as error propagation in numerical systems.  

In large-scale simulations such as weather prediction or physics engines, millions of operations are performed sequentially.  

Even tiny inaccuracies can grow into significant deviations over time.  

This is why numerical stability is a critical concept in computational mathematics.  

Stable algorithms are designed to minimize error amplification during iterative calculations.  

Modern GPUs and AI training systems also rely heavily on controlled floating point precision formats such as FP32 and FP16.  

Understanding floating point limitations is essential for building reliable scientific and engineering applications.  
              `
            }
          ]
        },

        {
          id: "l2",
          title: "Types of Numerical Errors",

          pages: [

            {
              title: "1. Meaning of Numerical Error (Deep Concept)",

              content: `
Numerical error is defined as the difference between the exact mathematical value and the computed approximate value.  

In most real-world computational problems, exact solutions are either impossible or impractical to obtain.  

Therefore, approximation becomes a necessary part of numerical computation.  

Error analysis helps us understand how far computed results deviate from true values.  

This is essential in ensuring the reliability of numerical methods used in engineering and science.  

Without error analysis, computational results cannot be trusted for real-world applications.  

Numerical error forms the foundation of accuracy assessment in all numerical algorithms.  

It allows comparison between different methods based on their precision and stability.  

Understanding error behavior is as important as understanding the algorithm itself.  
              `
            },

            {
              title: "2. Types of Errors with Explanation and Meaning",

              content: `
There are three primary types of numerical errors encountered in computation.  

The first type is absolute error, which measures the direct difference between true value and approximation.  

The second type is relative error, which measures error in proportional terms relative to true value.  

The third type is truncation error, which arises when infinite mathematical processes are approximated using finite steps.  

For example, Taylor series expansions are often truncated after a few terms for computation.  

This truncation introduces an inherent approximation error.  

Each type of error plays a different role in numerical analysis.  

Absolute error gives magnitude of deviation, while relative error provides scale-independent comparison.  

Truncation error helps evaluate approximation quality in iterative methods.  
              `
            },

            {
              title: "3. Error Propagation and Stability in Computation",

              content: `
In numerical systems, errors do not remain isolated to a single step.  

Instead, they propagate through successive calculations and can either grow or diminish.  

This behavior depends on the stability of the numerical method used.  

In iterative algorithms such as Newton-Raphson or Euler methods, each step depends on previous results.  

Therefore, even small initial errors can influence final outcomes significantly.  

Stable numerical methods are designed to control and reduce error amplification.  

Unstable methods, on the other hand, may produce completely incorrect results even with small input perturbations.  

This makes stability analysis a critical part of numerical method design.  

Understanding error propagation is essential for building reliable computational models in science and engineering.  
              `
            }
          ]
        }
      ]
    }
  ]
};
