const projects = [
  {
    title: "VR Sickness",
    description:
      "Predicting virtual reality sickness through the use of artificial intelligence.",
    abstract:
      "VR sickness is caused when the optical flow of the VR set (what people see) is different from the actual motion perceived by the subject (what people feel). The project is aimed to build a model to detect when there would be a sickness, given the input of the 360 videos simulating the usage of VR. The methods used include flowNet, decision tree, and autoencoder networks. The output could be publications, and the potential applications include pilot training, gaming, and general VR uses.",
    imageLink: "",
    team: "Tima,Alina,Daniel"
  },
  {
    title: "fMRI",
    description:
      "Using modern image processing technology to better predict neurological illness.",
    abstract:
      "Functional Magnetic Resonance Imaging, or fMRI, has emerged as a powerful tool in studying the function of brain regions. However, using data analysis techniques on fMRI data to predict the onset of neurodegenerative and mental illnesses has been challenging, largely due to the shortage of high-quality labeled data and the difficulty of extracting meaningful features. In this project, we utilize the Human Connectome Project, which contains a dataset of fMRI data labeled with the behavioral states of healthy subjects. By applying modern deep learning techniques on this dataset, we hope to build a classifier with strong predictive power on classifying behavioral states whose features contain significant correlations to a variety of neurodegenerative and mental illnesses.",
    imageLink: "",
    team: "Varun,Ram,Hang"
  },
  // {
  //   title: "Fidget",
  //   shortDescription:
  //     "Helping detect patterns of fidgeting for children with ADHD using a smart watch.",
  //   abstract:
  //     "There is a trend of large increase in Attention Deficit Hyperactivity Disorder (ADHD). Research has shown positive impact of fidget toys on students with ADHD. By replacing fidget toys with a similar app on a wearable device, user data from device sensors (e.g. heart rate, motion, location) can be collected to identify patterns of fidgeting. The project seeks to utilize ANOVA analysis to see user behavior differences and machine learning models to classify human activities in an effort to generate user behavior time series for children with ADHD",
  //   image: "",
  //   team: "Mary,Phoebe,Jia,Jaiveer,Himanshu"
  // },
  {
    title: "Network Anomaly Detection",
    description:
      "Improved abnormality detection in networks using ML and data filtering",
    abstract:
      "In order to assure that concerts and other large festivals have the appropriate technology functioning at all times, network engineers work around the clock to monitor all of the network traffic coming in and out of the event. Things like cellular data, wifi, point of sales, sound systems, are all vulnerable to either accidental or malicious failures. Using Machine Learning and advanced data filtering techniques, we are working to reduce the amount of information network engineers must keep track of in order to improve effectiveness and decrease workload.",
    imageLink: "",
    team: "Daniel,Jaiveer, Jason,Evan,Vishal"
  },
  {
    title: "Understanding Travel",
    description: "Predicting travel trends using cellular data",
    abstract:
      "Celitech is a business that aims to provide affordable, convenient cellular data around the world. By generating a substantial amount of data as a direct result of its business as well as through its partnerships. Beginning with a series of data visualizations and basic analysis, we will work to better understand cellular data usage as it pertains to travel and work to predict this data usage to improve coverage and cost of service.",
    imageLink: "",
    team: "Niko,Jia"
  },
  {
    title: "Entity Resolution of Clinical Analyte Results",
    description: "Matching tests across Hostpitals",
    abstract:
      "Every day, patients from across Duke Health receive laboratory tests in order to assess a variety of clinical conditions. Due to the large volume of patients that Duke sees -- as well as the sheer number of vendors, instruments, and other variables -- the laboratory values that are received often look different when they are in fact the same test. For example, a blood glucose test might come back under 1 name at Duke University Hospital, but that name may be different than a blood glucose test administered at Duke Regional Hospital.",
    imageLink: "",
    team: "Nicole,Himanshu"
  },
  {
    title: "Course Scheduling",
    description: "Automating and Optimizing Course Offerings",
    abstract:
      "Currently, Duke schedules classes manually and without significant communication between departments. This not only results in hours of work but also conflicts between upper-level electives and core classes for students which results in suboptimal class schedules and leads to backlogging of classes at the end of senior year for many students. Other larger universities such as Berkeley and CMU apply machine learning to their class scheduling in order to minimize such problems. This project will aid faculty minimize this problem at Duke in two phases. First, we will create a data visualization tool via heatmap to allow directors of undergraduate studies to see what class times have a significant number of classes and also the predicted sizes of these classes using ML to help them better utilize classrooms for scheduling. After this, with the help of roster data from the University Registrar, we will modify this tool to show the “significance” of the current overlapping classes by looking at how often students took those classes together in their time at Duke.",
    imageLink: "",
    team: "Ram,Jason,Angikar,Kush"
  },
  {
    title: "Radiology + Genomics",
    description:
      "Using radiology and genomics to determine susceptibility to different pathogens",
    abstract:
      "Using radiology data to determine whether or not a tumor is cancerous is widely researched, but a less commonly examined field is combining insights from Computer Vision in radiology alongside genetic data to examine not only oncology, but also general pathology.",
    imageLink: "",
    team: "Jaiveer,Phoebe,Luke",
    uid: "RadiologyGenomics"
  },
  {
    title: "Radio Frequency Classification",
    description:
      "In the battlefield, Radio Frequency communication is essential to the success of missions, so keeping RF comms up can be the difference between a successful and unsuccessful mission",
    abstract:
      "In order to radio frequency communications up, the Army hopes to use machine learning to classify signals as inhibiting and isolate adversarial signals so as to direct soldiers to the best location to get communications out.",
    imageLink: "",
    team: "Suchir,Luke,Geoff",
    uid: "RadioFrequencyClassification"
  },
  {
    title: "Duke Health Safety Bot",
    description:
      "Duke Health System wants a better way to filter emergency messages from less urgent ones.",
    abstract:
      "By using NLP to filter emergency from non-emergency messsages to prompt patients to reconsider calling an emergency line.",
    imageLink: "",
    team: "Varun,Luke,Yasa",
    uid: "DukeHealthSafetyBot"
  }
];

projects.forEach(project => {
  project.team = project.team.split(",");
});

module.exports = projects;
