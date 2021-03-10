package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that shows a random string */
@WebServlet("/string")
public class RandomStringServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String string1 = "My favorite movie is the notebook";
    String string2 = "I like chocolate";
    String string3 = "My favorite song is mirrors by justin timberlake";

    //String str = [string1, string2, string3];
    //String string = new String(String1, String2, String3);
     String json = convertToJson(string1);
     String json1 = convertToJson(string2);
     String json2 = convertToJson(string3);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
    response.getWriter().println(json1);
    response.getWriter().println(json2);
  }

  private String convertToJson(String strings) {
    String json = "{";
    json += "\"" + strings + "\"";
    json += "}";
    return json;
  }
}

