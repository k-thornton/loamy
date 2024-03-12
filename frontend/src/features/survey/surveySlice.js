import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { surveyService } from "../../services/SurveyService";

// Async thunk for fetching greeting
export const fetchGreeting = createAsyncThunk(
  "survey/fetchGreeting",
  async () => {
    const data = await surveyService.fetchGreeting();
    return data;
  }
);

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
  "survey/fetchQuestions",
  async () => {
    const data = await surveyService.fetchQuestions();
    return data;
  }
);

// Async thunk for fetching unanswered questions
export const fetchUnansweredQuestions = createAsyncThunk(
  "survey/fetchUnansweredQuestions",
  async () => {
    const data = await surveyService.fetchUnansweredQuestions();
    return data;
  }
);

// Async thunk for fetching answered questions
export const fetchAnsweredQuestions = createAsyncThunk(
  "survey/fetchAnsweredQuestions",
  async () => {
    const data = await surveyService.fetchAnsweredQuestions();
    return data;
  }
);

// Async thunk for resetting answers
export const resetAnswers = createAsyncThunk(
  "survey/resetAnswers",
  async () => {
    const data = await surveyService.resetAnswers();
    return data;
  }
);

// Async thunk for submitting answers
export const submitAnswers = createAsyncThunk(
  "survey/submitAnswers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const answers = getState().survey.answers;
      const data = await surveyService.submitAnswers(answers);
      return data; // Or return a success message/action
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching me
export const fetchMe = createAsyncThunk(
  "survey/fetchMe",
  async (_, { dispatch }) => {
    const zodiacDetails = await surveyService.fetchMe();
    console.log(zodiacDetails);
    // Assuming zodiacDetails contains both the new zodiac sign and additional info
    dispatch(setSelectedZodiac(zodiacDetails.zodiacSign));
    dispatch(setMyPersona(zodiacDetails)); // Adjust based on actual data structure

    return zodiacDetails;
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    questions: [],
    answers: {},
    selectedZodiac: null,
    myPersona: null,
    greeting: "",
    loading: false,
    error: null,
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
    updateAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setMyPersona: (state, action) => {
      state.myPersona = action.payload;
    },
    setSelectedZodiac: (state, action) => {
      state.selectedZodiac = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.answers = action.payload.reduce((acc, current) => {
          acc[current.question._id] = current.answer;
          return acc;
        }, {});
        state.questions = action.payload.map((item) => item.question);
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchUnansweredQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUnansweredQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchUnansweredQuestions.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchAnsweredQuestions.fulfilled, (state, action) => {
        state.answers = action.payload.reduce((acc, current) => {
          acc[current.question._id] = current.answer.answer;
          return acc;
        }, {});
        state.questions = action.payload.map((item) => item.question);
        state.loading = false;
      })
      .addCase(resetAnswers.fulfilled, (state) => {
        state.questions = [];
        state.answers = {};
      })
      .addCase(submitAnswers.fulfilled, (state, action) => {
        console.log("Answers submitted successfully");
        // Handle success, maybe clear current answers or fetch new questions
      })
      .addCase(submitAnswers.rejected, (state, action) => {
        state.error = action.payload; // Assuming error info is in payload
      });
  },
});

export const {
  setGreeting,
  setAnswers,
  setMyPersona,
  setSelectedZodiac,
  updateAnswer,
} = surveySlice.actions;

export default surveySlice.reducer;
