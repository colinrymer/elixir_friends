defmodule ElixirFriends.API.PostControllerTest do
  use ElixirFriends.ConnCase
  alias ElixirFriends.Post

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, "/api/posts"
    expected_response = %{
      total_pages: 0,
      total_entries: 0,
      page_size: 20,
      page_number: 1,
      entries: []
    } |> Poison.encode!
    assert json_response(conn, 200) == expected_response
  end
end
