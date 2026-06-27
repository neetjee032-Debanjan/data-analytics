export const knowledgeGraph = {

  bisection: [
    {
      applicationId: "bridge",
      title: "Bridge Analysis",
      icon: "🌉",
      reason: "Used for solving engineering equations when exact analytical solutions are difficult."
    },
    {
      applicationId: "aircraft",
      title: "Aircraft Design",
      icon: "✈️",
      reason: "Used in iterative design calculations and nonlinear equation solving."
    }
  ],

  newton: [
    {
      applicationId: "aircraft",
      title: "Aircraft Design",
      icon: "✈️",
      reason: "Used for nonlinear optimization, aerodynamic calculations and engineering equation solving."
    },
    {
      applicationId: "machinelearning",
      title: "Machine Learning",
      icon: "🧠",
      reason: "Newton-type methods are used in optimization and training models."
    },
    {
      applicationId: "space",
      title: "Space Missions",
      icon: "🚀",
      reason: "Used for solving orbital mechanics and trajectory correction equations."
    }
  ],

  secant: [
    {
      applicationId: "stocks",
      title: "Stock Prediction",
      icon: "📈",
      reason: "Used in numerical estimation when derivative information is unavailable."
    },
    {
      applicationId: "telecom",
      title: "Telecommunications",
      icon: "📡",
      reason: "Useful in solving nonlinear signal and system equations."
    }
  ],

  falseposition: [
    {
      applicationId: "bridge",
      title: "Bridge Analysis",
      icon: "🌉",
      reason: "Used for safe bracketing of roots in engineering equations."
    }
  ],

  fixedpoint: [
    {
      applicationId: "machinelearning",
      title: "Machine Learning",
      icon: "🧠",
      reason: "Many iterative optimization algorithms are based on fixed-point ideas."
    }
  ],

  lagrange: [
    {
      applicationId: "medical",
      title: "Medical Imaging",
      icon: "🏥",
      reason: "Interpolation is used in image reconstruction and resampling."
    },
    {
      applicationId: "weather",
      title: "Weather Forecasting",
      icon: "🌦️",
      reason: "Used for estimating atmospheric values between grid points."
    }
  ],

  newtonforward: [
    {
      applicationId: "weather",
      title: "Weather Forecasting",
      icon: "🌦️",
      reason: "Used when equally spaced data points are available."
    }
  ],

  newtonbackward: [
    {
      applicationId: "stocks",
      title: "Stock Prediction",
      icon: "📈",
      reason: "Used for estimating recent values near the end of tabulated data."
    }
  ],

  divideddifference: [
    {
      applicationId: "space",
      title: "Space Missions",
      icon: "🚀",
      reason: "Useful when data points are unequally spaced."
    }
  ],

  cubicspline: [
    {
      applicationId: "medical",
      title: "Medical Imaging",
      icon: "🏥",
      reason: "Used for smooth image interpolation and reconstruction."
    },
    {
      applicationId: "game",
      title: "Game Physics",
      icon: "🎮",
      reason: "Used for smooth animation paths and motion curves."
    }
  ],

  forwarddifference: [
    {
      applicationId: "weather",
      title: "Weather Forecasting",
      icon: "🌦️",
      reason: "Used in finite difference approximations of atmospheric equations."
    }
  ],

  backwarddifference: [
    {
      applicationId: "climate",
      title: "Climate Modelling",
      icon: "🌍",
      reason: "Used in numerical simulation of time-dependent systems."
    }
  ],

  centraldifference: [
    {
      applicationId: "aircraft",
      title: "Aircraft Design",
      icon: "✈️",
      reason: "Used in CFD and derivative approximation with better accuracy."
    }
  ],

  trapezoidal: [
    {
      applicationId: "aircraft",
      title: "Aircraft Design",
      icon: "✈️",
      reason: "Used to approximate accumulated forces, work and energy."
    }
  ],

  simpson13: [
    {
      applicationId: "medical",
      title: "Medical Imaging",
      icon: "🏥",
      reason: "Used in accurate numerical integration for reconstruction algorithms."
    }
  ],

  simpson38: [
    {
      applicationId: "signal",
      title: "Signal Processing",
      icon: "🔊",
      reason: "Used for accurate area and signal energy calculations."
    }
  ],

  euler: [
    {
      applicationId: "game",
      title: "Game Physics",
      icon: "🎮",
      reason: "Used to update object motion frame by frame."
    },
    {
      applicationId: "weather",
      title: "Weather Forecasting",
      icon: "🌦️",
      reason: "Used as a basic method for evolving atmospheric equations over time."
    }
  ],

  modifiedeuler: [
    {
      applicationId: "climate",
      title: "Climate Modelling",
      icon: "🌍",
      reason: "Improves prediction accuracy in time-dependent simulations."
    }
  ],

  rk2: [
    {
      applicationId: "space",
      title: "Space Missions",
      icon: "🚀",
      reason: "Used for better trajectory prediction than simple Euler methods."
    }
  ],

  rk4: [
    {
      applicationId: "space",
      title: "Space Missions",
      icon: "🚀",
      reason: "Widely used for accurate orbit and trajectory simulation."
    },
    {
      applicationId: "aircraft",
      title: "Aircraft Design",
      icon: "✈️",
      reason: "Used for flight dynamics and control-system simulation."
    }
  ]

};
