import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { surveyService } from "../../services/SurveyService";

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
    const persona = await surveyService.fetchMe();
    dispatch(setMyPersona(persona));
    return persona;
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    questions: [],
    answers: {},
    myPersona: null,
    loading: false,
    error: null,
    surveyCompleted: false
  },
  reducers: {
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
    clearError: (state) => {
      state.error = null;
    },
    setSurveyCompleted: (state) => {
      state.surveyCompleted = true;
    },
    unsetSurveyCompleted: (state) => {
      state.surveyCompleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.answers = action.payload.reduce((acc, current) => {
          acc[current.question._id] = current.answer;
          return acc;
        }, {});
        const sortedQuestions = action.payload.sort((a, b) => a.question.questionNumber - b.question.questionNumber);
        state.questions = sortedQuestions.map(item => item.question);

        // Determine if all questions have an answer to set surveyCompleted status
        const allQuestionsAnswered = sortedQuestions.every(q => q.answer !== null);
        state.surveyCompleted = allQuestionsAnswered;
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
        state.answers = {};
        state.surveyCompleted = false;
      })
      .addCase(submitAnswers.fulfilled, (state, action) => {
        console.log("Answers submitted successfully");
        state.surveyCompleted = true;
      })
      .addCase(submitAnswers.rejected, (state, action) => {
        console.error("Failed to submit answers:", action.error.message);
        // Update state to indicate an error has occurred
        state.error = action.error.message;
        // here you could display the error message to the user
      })
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setAnswers, setMyPersona, updateAnswer, clearError, setSurveyCompleted, unsetSurveyCompleted } =
  surveySlice.actions;

export default surveySlice.reducer;
