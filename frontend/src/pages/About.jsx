import React from "react";

const About = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f5f7f4",
      padding: "60px 20px",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "20px",
      padding: "50px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    },

    hero: {
      textAlign: "center",
      marginBottom: "50px",
    },

    title: {
      fontSize: "48px",
      color: "#2E7D32",
      marginBottom: "15px",
    },

    subtitle: {
      fontSize: "20px",
      color: "#666",
      lineHeight: "1.7",
      maxWidth: "750px",
      margin: "0 auto",
    },

    section: {
      marginBottom: "45px",
    },

    heading: {
      color: "#2E7D32",
      marginBottom: "15px",
      fontSize: "30px",
    },

    text: {
      fontSize: "18px",
      color: "#555",
      lineHeight: "1.9",
    },

    founder: {
      display: "flex",
      alignItems: "center",
      gap: "35px",
      flexWrap: "wrap",
      marginTop: "40px",
      background: "#f8fff8",
      borderRadius: "15px",
      padding: "30px",
    },

    image: {
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid #2E7D32",
    },

    founderInfo: {
      flex: 1,
    },

    founderName: {
      fontSize: "32px",
      color: "#2E7D32",
      marginBottom: "8px",
    },

    founderRole: {
      color: "#777",
      fontWeight: "bold",
      marginBottom: "20px",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      marginTop: "40px",
    },

    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      textAlign: "center",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "15px",
    },

    cardTitle: {
      color: "#2E7D32",
      marginBottom: "10px",
    },
    connectSection: {
  marginTop: "60px",
  background: "#f8fff8",
  padding: "35px",
  borderRadius: "15px",
  textAlign: "center",
},

connectText: {
  color: "#555",
  fontSize: "17px",
  marginTop: "10px",
  marginBottom: "25px",
},

linkContainer: {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
},

linkButton: {
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "10px",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.3s",
},

    footer: {
      marginTop: "60px",
      background: "#2E7D32",
      color: "#fff",
      padding: "35px",
      borderRadius: "15px",
      textAlign: "center",
      lineHeight: "1.8",
    },
  };
  

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Hero */}

        <div style={styles.hero}>
          <h1 style={styles.title}>About FreshCart</h1>

          <p style={styles.subtitle}>
            FreshCart was built with one simple goal — to make grocery shopping
            faster, easier, and more convenient for every family. We believe
            that quality groceries should be just a few clicks away.
          </p>
        </div>

        {/* Story */}

        <div style={styles.section}>
          <h2 style={styles.heading}>Our Story</h2>

          <p style={styles.text}>
            FreshCart started as a personal project with a vision to simplify
            everyday grocery shopping. Instead of spending hours visiting
            crowded stores, customers can browse fresh products, add them to
            their cart, and receive them at their doorstep with ease.
            <br />
            <br />
            Every feature of this platform has been developed with customer
            convenience in mind—from secure payments and smooth checkout to
            quick delivery and a user-friendly interface.
          </p>
        </div>

        {/* Founder */}

        <div style={styles.founder}>
          <img
            src="/p.jpg"
            alt="Founder"
            style={styles.image}
          />

          <div style={styles.founderInfo}>
            <h2 style={styles.founderName}>Lovish Menaria</h2>

            <p style={styles.founderRole}>
              Founder & Full Stack Developer
            </p>

            <p style={styles.text}>
              Hi! I'm <strong>Lovish Menaria</strong>, the founder of FreshCart.
              I created this platform to combine technology with everyday
              convenience. My goal is to build applications that solve real-life
              problems while providing users with a modern, fast, and secure
              experience.
              <br />
              <br />
              FreshCart represents my passion for web development, problem
              solving, and creating products that people genuinely enjoy using.
            </p>
          </div>
        </div>

        {/* Connect With Me */}

<div style={styles.connectSection}>
  <h2 style={styles.heading}>Connect With Me</h2>

  <p style={styles.connectText}>
    Thanks for checking out FreshCart! Feel free to connect with me and explore
    my other projects.
  </p>

  <div style={styles.linkContainer}>
    <a
      href="https://lovish-14-portfolio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.linkButton,
        background: "#2E7D32",
      }}
    >
      🌐 Portfolio
    </a>

    <a
      href="https://github.com/lovishmenaria14-gif"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.linkButton,
        background: "#24292e",
      }}
    >
      💻 GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/lovish-menaria-b6b562316/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.linkButton,
        background: "#0077B5",
      }}
    >
      🔗 LinkedIn
    </a>
  </div>
</div>

        {/* Values */}

        <div style={styles.cards}>
          <div style={styles.card}>
            <div style={styles.icon}>🥬</div>
            <h3 style={styles.cardTitle}>Fresh Products</h3>
            <p>Quality groceries sourced with freshness as our priority.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🚚</div>
            <h3 style={styles.cardTitle}>Fast Delivery</h3>
            <p>Quick and reliable doorstep delivery whenever you need it.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🔒</div>
            <h3 style={styles.cardTitle}>Secure Shopping</h3>
            <p>Safe payments and secure checkout for complete peace of mind.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>❤️</div>
            <h3 style={styles.cardTitle}>Customer First</h3>
            <p>Your satisfaction remains our biggest motivation every day.</p>
          </div>
        </div>

        {/* Footer */}

        <div style={styles.footer}>
          <h2>Thank You for Visiting FreshCart ❤️</h2>

          <p>
            Every order you place supports a dream that began with a single idea
            and countless hours of development. Thank you for being part of this
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;