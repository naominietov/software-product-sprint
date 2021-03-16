package com.google.sps.servlets;

import java.util.ArrayList; // import the ArrayList class
import com.google.sps.data.ServerStats;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.Date;
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

    String json = convertToJsonUsingGson(str);
    response.getWriter().println(json);
  }

  private String convertToJsonUsingGson(str) {
    Gson gson = new Gson();
    String json = gson.toJson(serverStats);
    return json;
  }
}