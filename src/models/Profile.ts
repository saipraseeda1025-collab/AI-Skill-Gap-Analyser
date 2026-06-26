import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProfile extends Document {
  userId: mongoose.Types.ObjectId;
  phone: string;
  dateOfBirth?: Date;
  gender?: string;

  department: string;
  year: number;
  section?: string;
  registerNumber?: string;

  cgpa: number;

  skills: string[];
  programmingLanguages: string[];
  technologies: string[];

  projects: string[];
  certifications: string[];
  internships: string[];
  achievements: string[];

  careerInterests: string[];
  preferredJobRole?: string;
  preferredLocation?: string;

  github?: string;
  linkedin?: string;
  portfolio?: string;
  resume?: string;

  bio?: string;
}

const ProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    dateOfBirth: Date,

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    department: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    section: String,

    registerNumber: String,

    cgpa: {
      type: Number,
      min: 0,
      max: 10,
    },

    skills: {
      type: [String],
      default: [],
    },

    programmingLanguages: {
      type: [String],
      default: [],
    },

    technologies: {
      type: [String],
      default: [],
    },

    projects: {
      type: [String],
      default: [],
    },

    certifications: {
      type: [String],
      default: [],
    },

    internships: {
      type: [String],
      default: [],
    },

    achievements: {
      type: [String],
      default: [],
    },

    careerInterests: {
      type: [String],
      default: [],
    },

    preferredJobRole: String,

    preferredLocation: String,

    github: String,

    linkedin: String,

    portfolio: String,

    resume: String,

    bio: String,
  },
  {
    timestamps: true,
  }
);

export default models.Profile || model("Profile", ProfileSchema);