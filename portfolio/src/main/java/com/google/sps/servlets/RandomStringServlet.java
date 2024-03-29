package com.google.sps.servlets;

import java.util.ArrayList; // import the ArrayList class
//import com.google.sps.data.ServerStats;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that responds with the current date. */
@WebServlet("/string-nao")

public class RandomStringServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {


    ArrayList<String> str = new ArrayList<String>();
    str.add("My favorite movie is the notebook");
    str.add("My favorite icecream is vanilla");
    str.add("I like playing voleyball");
    str.add("I am 20 years old");
    str.add("I have 3 pets: two rabbits and one dog");
    str.add("I love chocolate");
    str.add("I'm fan of asian food");
    str.add("I like to travel and meet new people");

    String json = convertToJsonUsingGson(str);
    response.getWriter().println(json);
  }

  private String convertToJsonUsingGson(ArrayList<String> str) {
    Gson gson = new Gson();
    String json = gson.toJson(str);
    return json;
  }

  private String convertToJson(String strings) {
    String json = "{";
    json += "\"" + strings + "\"";
    json += "}";
    return json;
  }
}

